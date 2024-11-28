import type { Struct, Schema } from '@strapi/strapi';

export interface TabelleKonzerttermine extends Struct.ComponentSchema {
  collectionName: 'components_tabelle_konzerttermines';
  info: {
    displayName: 'Konzerttermine';
    icon: 'apps';
    description: '';
  };
  attributes: {
    datum: Schema.Attribute.Date & Schema.Attribute.Required;
    stadt: Schema.Attribute.String & Schema.Attribute.Required;
    location: Schema.Attribute.String & Schema.Attribute.Required;
    time: Schema.Attribute.Time & Schema.Attribute.Required;
    ticketLink: Schema.Attribute.String;
  };
}

export interface FeaturesTestimonial extends Struct.ComponentSchema {
  collectionName: 'components_features_testimonials';
  info: {
    displayName: 'Testimonial';
    icon: 'cog';
  };
  attributes: {
    Name: Schema.Attribute.String;
    Zitat: Schema.Attribute.Text;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'tabelle.konzerttermine': TabelleKonzerttermine;
      'features.testimonial': FeaturesTestimonial;
    }
  }
}
