import React from 'react';
import { Helmet } from 'react-helmet-async';

export function PageMetaTags({ title, description, imageUrl, url }) {

    return (
        <Helmet>
            <title data-rh="true">{title}</title>
            <meta name="description" content={description} />
            {/* Open Graph metadata */}
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={imageUrl} />
            <meta property="og:url" content={url} />
            <meta property="og:type" content="website" />

            {/* Twitter Card metadata */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={imageUrl} />

            {/* Facebook Instant Articles metadata */}
            <meta property="op:markup_version" content="v1.0" />

            {/* Schema.org metadata */}
            <meta itemProp="name" content={title} />
            <meta itemProp="description" content={description} />
            <meta itemProp="image" content={imageUrl} />

            {/* LinkedIn metadata */}
            <meta property="linkedin:title" content={title} />
            <meta property="linkedin:description" content={description} />
            <meta property="linkedin:image" content={imageUrl} />
            <meta property="linkedin:url" content={url} />
        </Helmet>
    );
}