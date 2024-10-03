import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Beranda',
      href: getPermalink('/'),
    },
    {
      text: 'Profil',
      links: [
        {
          text: 'Tentang Kami',
          href: getPermalink('/about#tentang'),
        },
        {
          text: 'Sejarah',
          href: getPermalink('/about#sejarah'),
        },
        {
          text: 'Tim KWT',
          href: getPermalink('/about#tim'),
        }
      ],
    },
    {
      text: 'Edutainment',
      href: getPermalink('/edutainment'),
    },
    {
      text: 'Produk',
      links: [
        {
          text: 'Toolskit Budidaya',
          href: getPermalink('/product#paket'),
        },
        {
          text: 'Produk Olahan Sorgum',
          href: getPermalink('/product#olahan'),
        }
      ],
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
          href: getPermalink('/package#cookingClass'),
        },
        {
          text: 'Mini Tour',
          href: getPermalink('/package#miniTour'),
        },
      ],
    },
    {
      title: 'Tentang Kami',
      links: [
        {
          text: 'Sejarah',
          href: getPermalink('/about#features'),
        },
        {
          text: 'Profil',
          href: getPermalink('/about'),
        },
        {
          text: 'Tim KWT',
          href: getPermalink('/about'),
        },
      ],
    },
    {
      title: 'Produk Kami',
      links: [
        {
          text: 'Makanan',
          href: getPermalink('/product#makanan'),
        },
        {
          text: 'Minuman',
          href: getPermalink('/product#minuman'),
        },
        {
          text: 'Bahan Baku',
          href: getPermalink('/product#bahanbaku'),
        },
      ],
    },
  ],
  secondaryLinks: [
    // { text: 'Terms', href: getPermalink('/terms') },
    // { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    // { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    {
      ariaLabel: 'Instagram',
      icon: 'tabler:brand-instagram',
      href: 'https://www.instagram.com/kampungsorgum.bojongmanggu/',
      target: '_blank',
    },
    // { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    // { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    // { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/onwidget/astrowind' },
  ],
  // footNote: `
  //   <img class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm" src="https://onwidget.com/favicon/favicon-32x32.png" alt="onWidget logo" loading="lazy"></img>
  //   Made by <a class="text-blue-600 underline dark:text-muted" href="https://onwidget.com/"> onWidget</a> · All rights reserved.
  // `,
};
