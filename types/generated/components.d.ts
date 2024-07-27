import type { Schema, Attribute } from '@strapi/strapi';

export interface HomePageAboutMe extends Schema.Component {
  collectionName: 'components_home_page_about_mes';
  info: {
    displayName: 'about_me';
    icon: 'emotionHappy';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    photo: Attribute.Media<'images'> & Attribute.Required;
    talk_button: Attribute.String;
    resume_button: Attribute.String;
  };
}

export interface HomePageHeroSection extends Schema.Component {
  collectionName: 'components_home_page_hero_sections';
  info: {
    displayName: 'Hero section';
  };
  attributes: {
    title: Attribute.String;
    subtitle: Attribute.Text;
    talk_button: Attribute.String;
    resume_button: Attribute.String;
  };
}

export interface SharedMetaSocial extends Schema.Component {
  collectionName: 'components_shared_meta_socials';
  info: {
    displayName: 'metaSocial';
    icon: 'project-diagram';
  };
  attributes: {
    socialNetwork: Attribute.Enumeration<['Facebook', 'Twitter']> &
      Attribute.Required;
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    description: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 65;
      }>;
    image: Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    icon: 'search';
  };
  attributes: {
    metaTitle: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaDescription: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 50;
        maxLength: 160;
      }>;
    metaImage: Attribute.Media<'images' | 'files' | 'videos'>;
    metaSocial: Attribute.Component<'shared.meta-social', true>;
    keywords: Attribute.Text;
    metaRobots: Attribute.String;
    structuredData: Attribute.JSON;
    metaViewport: Attribute.String;
    canonicalURL: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'home-page.about-me': HomePageAboutMe;
      'home-page.hero-section': HomePageHeroSection;
      'shared.meta-social': SharedMetaSocial;
      'shared.seo': SharedSeo;
    }
  }
}
