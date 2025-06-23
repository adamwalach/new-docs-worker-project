import { Navbar } from "@docusaurus/theme-common"

export const navbar: Navbar = {
  hideOnScroll: false,
  logo: {
    alt: "Ory",
    src: `/img/logos/logo-docs-2023-02-15.svg`,
    srcDark: `/img/logos/logo-docs-dark-2023-02-15.svg`,
    href: `https://www.ory.sh`,
    width: 63,
    height: 32,
  },
  items: [
    {
      to: "/getting-started/overview",
      label: "Start",
      position: "left",
    },
    {
      label: "Products",
      position: "left",
      items: [
        {
          to: "/identities",
          label: "Ory Kratos Identities",
        },
        {
          to: "/oauth2-oidc",
          label: "Ory Hydra OAuth2",
        },
        {
          to: "/keto",
          label: "Ory Keto Permissions",
        },
        {
          to: "/polis",
          label: "Ory Polis SAML",
        },
        {
          to: "/oathkeeper",
          label: "Ory Oathkeeper Zero Trust",
        },
        {
          to: "/self-hosted/oel",
          label: "Ory Enterprise License",
        },
      ],
    },
    {
      label: "Manage",
      position: "left",
      items: [
        {
          to: "/guides/operations",
          label: "Platform",
        },
        {
          to: "/category/troubleshooting",
          label: "Troubleshooting",
        },
        {
          to: "/security-compliance/compliance-and-certifications",
          label: "Security and compliance",
        },
      ],
    },
    {
      //   to: "/reference/api",
      //   to: "/reference", // TODO: Use this route
      label: "Reference",
      position: "left",
      items: [
        {
          to: "/reference/api",
          label: "REST API",
        },
        {
          to: "/category/ory-cli-reference",
          label: "Ory CLI",
        },
        {
          to: "/sdk",
          label: "Ory SDKs",
        },
      ],
    },
    {
      to: "/ecosystem/projects",
      label: "Open Source",
      position: "left",
    },
    {
      label: "Need Support?",
      position: "right",
      items: [
        {
          to: "https://www.ory.sh/support",
          label: "Enterprise Support",
        },
        {
          to: "https://www.ory.sh/search",
          label: "Search the docs",
        },
        {
          to: "https://www.ory.sh/chat",
          label: "Ory Community Slack",
        },
        {
          to: "https://github.com/orgs/ory/discussions",
          label: "GitHub Discussions",
        },
        {
          to: "https://stackoverflow.com/questions/tagged/ory",
          label: "Stack Overflow",
        },
        {
          to: "https://www.ory.sh/contact",
          label: "Schedule a discovery call",
        },
      ],
    },

    {
      href: `https://github.com/ory`,
      label: "GitHub",
      position: "right",
    },
  ],
}
