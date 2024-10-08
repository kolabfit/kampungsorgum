import { getPermalink } from './utils/permalinks';

import { contentfulClient } from '~/lib/contentful';
import type { EntryFieldTypes } from 'contentful';

interface KontakType {
  contentTypeId: string;
  fields: {
    logo: EntryFieldTypes.Text;
    usernameKontak: EntryFieldTypes.Text;
    url: EntryFieldTypes.Text;
  };
}

// Fetch the entry and include linked assets
const entries = await contentfulClient.getEntries<KontakType>({
  content_type: 'kontakListType',
});

const items = entries.items.map((item) => {
  return {
    ariaLabel: item.fields.usernameKontak,
    icon: item.fields.logo,
    href: item.fields.url,
    target: '_blank',
  };
});

export const headerData = {
  links: [
    {
      text: 'Beranda',
      href: getPermalink('/'),
    },
    {
      text: 'Profil',
      href: getPermalink('/about'),
    },
    {
      text: 'Edutainment',
      href: getPermalink('/edutainment'),
    },
    {
      text: 'Produk',
      href: getPermalink('/product'),
    },
    {
      text: 'Edusorgum',
      href: getPermalink('/edusorgum'),
    },
    {
      text: 'Media',
      href: getPermalink('/media'),
    },
    {
      text: 'Kontak',
      href: getPermalink('/contact'),
    },
  ],
  actions: [{ text: 'Hubungi Kami', href: getPermalink('/contact') }],
};

export const footerData = {
  links: [
    {
      title: 'Layanan Kami',
      links: [
        {
          text: 'Cooking Class',
          href: getPermalink('/edutainment'),
        },
        {
          text: 'Mini Tour',
          href: getPermalink('/edutainment'),
        },
      ],
    },
    {
      title: 'Tentang Kami',
      links: [
        {
          text: 'Profil',
          href: getPermalink('/about/#tentang'),
        },
        {
          text: 'Sejarah',
          href: getPermalink('/about/#sejarah'),
        },
        {
          text: 'Tim KWT',
          href: getPermalink('/about/#tim'),
        },
      ],
    },
    {
      title: 'Produk Kami',
      links: [
        {
          text: 'Toolskit',
          href: getPermalink('/product/#toolskit'),
        },
        {
          text: 'Produk Olahan Sorgum',
          href: getPermalink('/product#olahan'),
        },
      ],
    },
  ],
  socialLinks: [
    ...items,
  ],
  secondaryLinks: [],
  footNote: 'Pamengpeuk, Bojongmanggu, Bandung, Jawa Barat',
};
