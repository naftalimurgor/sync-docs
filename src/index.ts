/* eslint-disable functional/immutable-data */
/* eslint-disable functional/prefer-readonly-type */
import fs from 'fs/promises';

import axios from 'axios';
import * as cheerio from 'cheerio';
import { NodeHtmlMarkdown } from 'node-html-markdown';

type Link = {
  href: string;
  name: string;
};

async function parseToMarkdown(links: Array<Link>) {
  const mdc = new NodeHtmlMarkdown({
    codeBlockStyle: 'indented',
    ignore: ['a'],
  });

  links.forEach(async (link: Link, index: number) => {
    const pageData = await axios.get(link.href);
    const $ = cheerio.load(pageData.data);

    const pageContent = $('div.section').html();
    const frontMatter = `
---
sidebar_position: ${index + 2}
---
`;
    const mdContent = ` ${frontMatter.trimStart()}${mdc.translate(
      pageContent as string
    )}`;
    await writeToFs(mdContent.trimStart(), link.name);
  });
}

async function writeToFs(content: string, filename: string) {
  await fs.writeFile(`rpc-md/${filename}.md`, content);
}

async function fetchLinks() {
  const rpcLink = 'https://developer.bitcoin.org/reference/rpc/index.html';
  const baseRPCUrl = 'https://developer.bitcoin.org/reference/rpc/';
  const rpcSummaryPage = await axios.get(rpcLink);

  const $ = cheerio.load(rpcSummaryPage.data);
  const links: Array<Link> = [];
  const $childLinks = $('div.toctree-wrapper > ul').children('li').children();

  $childLinks.each((_index: number, element: cheerio.Element) => {
    const a = $(element).attr();
    console.log(a);
    const link = {
      href: `${baseRPCUrl}${a?.href}`,
      name: `${a?.href.slice(0, a?.href.indexOf('.'))}`,
    };

    links.push(link);
  });

  return links;
}

const main = async () => {
  const childLinks = await fetchLinks();
  await parseToMarkdown(childLinks);
};

main().catch((err) => {
  console.log(err);
});
