

export const homeJsonLd = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "SoluTrend",
    "url": "https://solutrend.com",
    "potentialAction": [
        {
            "@type": "SubscribeAction",
            "target": {
                "@type": "EntryPoint",
                "urlTemplate": "https://solutrend.com/subscribe",
                "description": "Subscribe to our newsletter to get the latest in software solutions."
            }
        },
        {
            "@type": "SearchAction",
            "target": "https://solutrend.com/explore/{content}",
            "query-input": "required name=content default=a",
            "description": "Search for business software solutions with options to filter by price and supported platforms."
        }
    ],
    "hasPart": [
        {
            "@type": "WebPage",
            "name": "Price",
            "url": "https://solutrend.com/price",
            "description": "Listing your tools freely ,we provide promotion plans."
        },
        {
            "@type": "WebPage",
            "name": "Blog",
            "url": "https://solutrend.com/blog",
            "description": "Explore blog articles about software comparisons and recommended best apps."
        }
    ]
});



export const blogJsonld = (articles) => {

    const listPosts = articles.map((r) => {
        return {
            "@type": "BlogPosting",
            "headline": r['title'],
            "url": "https://solutrend.com/blog/" + r['short_title'],
            "image": r['image_url'],
            "description": r['description']
        };
    });

    const data = {
        "@type": "Blog",
        "name": "Blog",
        "url": "https://solutrend.com/blog",
        "description": "Discover articles about the best software, software comparisons, and recommendations for the best business software solutions.",
        "hasPart": [
            { listPosts }
        ]
    };


    return JSON.stringify(data);

}


export const articleJsonld = (article) => {

    const data = {
        "@context": "https://schema.org",
        "@type": "Article",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://solutrend.com/blog/" + article['short_title']
        },
        "headline": article['title'],
        "image": [
            article['image_url']
        ],
        "datePublished": article['created_at'],
        "dateModified": article['created_at'],
        "author": article['author'],
        "publisher": {
            "@type": "Organization",
            "name": "Solutrend",
            "logo": {
                "@type": "ImageObject",
                "url": "https://solutrend.com/sollogo.png"

            }
            
        },
        "description": article['description'],
        "articleBody": article['body']
    };

    return JSON.stringify(data);
}



export const toolJsonld = (app) => {

    const data = {
        "@context": "http://schema.org",
        "@type": "SoftwareApplication",
        "name": app['app_name'],
        "description": app['description'],
        "operatingSystem": app['devices'],
        "applicationCategory": app['category'],
        "author": {
            "@type": "Organization",
            "name": "Solutrend"
        },
        "image": {
            "@type": "ImageObject",
            "url": app['logo_url'],
            "width": 512,
            "height": 512
        },
        'rating': {
            '@type': 'AggregateRating',
            'ratingValue': app['avg_rating'] || 0,
            'reviewCount': app['rating_count'] || 0,
        },
        'itemReviewed': app['app_name']       
    };

    return JSON.stringify(data);

}