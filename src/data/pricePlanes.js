

const myPlans = [
    [{ name: 'free' },
    { content: 'Just One Tool', include: true },
    { content: 'Limited support', include: true },
    { content: 'hours to approve', include: true },
    { content: 'Collect Reviews', include: false },
    { content: 'Featured on Homepage', include: false },
    { content: 'Monthly Newsletters', include: false },
    { price: 'monthly', amount: '0' },
    { price: 'yearly', amount: '0' }
    ],
    [
        { name: 'pro' },
        { content: 'Up to Three Tools', include: true },
        { content: 'Featured on Homepage', include: true },
        { content: ' Collect Reviews', include: true },
        { content: 'Deticted support', include: true },
        { content: 'instant Approval', include: true },
        { content: 'Monthly Newsletters', include: false },
        { price: 'monthly', amount: '10' },
        { price: 'yearly', amount: '60' }

    ],
    [
        { name: 'advanced' },
        { content: 'Up to Six Tools', include: true },
        { content: 'Featured on Suggestions', include: true },
        { content: ' Collect Reviews', include: true },
        { content: 'Unlimited support', include: true },
        { content: 'Auto Approval', include: true },
        { content: 'Monthly Newsletters', include: true },
        { price: 'monthly', amount: '20' },
        { price: 'yearly', amount: '120' }
    ],
];




const planz = [

    {
        "id": 1,
        "name": "FREE",
        "subtitle": "free to listing your tool",
        "price": 0,
        "popular": false,
        "app_count": 1,
        "support_type": "Limited support",
        "review_collection": true,
        "approval_time": "up to 2 hours to approved",
        "featured": false,
        "newsletters": false,
        "many_apps": "Just One App",
        "export_reviews": false
    }
    , {

        "id": 2,
        "name": "PRO",
        "subtitle": " listing your tool and export reviews",
        "price": 10,
        "popular": true,
        "annually": true,
        "year": 60,
        "app_count": 1,
        "support_type": "Limited support",
        "review_collection": true,
        "approval_time": "instantly approved",
        "featured": true,
        "newsletters": false,
        "many_apps": "up to 3 tools",
        "export_reviews": true,
        "checkout_url": 'https://solutrend.lemonsqueezy.com/checkout/buy/0bae899a-3459-4535-9735-c213569d0a3d?desc=0'

    },
    {

        "id": 3,
        "name": "ADVANCED",
        "subtitle": " listing your tools in our email newsletters",
        "price": 20,
        "annually": true,
        "year": 120,
        "popular": false,
        "app_count": 1,
        "support_type": "dedicated support",
        "review_collection": true,
        "approval_time": "instantly approved",
        "featured": true,
        "newsletters": true,
        "many_apps": "up to 6 tools",
        "export_reviews": true,
        "checkout_url": 'https://solutrend.lemonsqueezy.com/checkout/buy/3a7a408f-338c-4dd0-88aa-8616c1c5f662?desc=0'

    }

];



export { myPlans, planz };