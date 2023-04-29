

export class APP {
    constructor(data) {
        this.id = data.id;
        this.userId = data.user_id;
        this.categoryId = data.category_id;
        this.planName = data.plan_name;
        this.appName = data.app_name;
        this.appUrl = data.app_url;
        this.whatApp = data.what_app;
        this.description = data.description;
        this.contactEmail = data.contact_email;
        this.shotUrl = data.shot_url;
        this.calendlyUrl = data.calendly_url;
        this.whoNeed = data.who_need;
        this.whyUse = data.why_use;
        this.alternatives = data.alternatives;
        this.startPrice = data.start_price;
        this.feesPer = data.fees_per;
        this.logoUrl = data.logo_url;
        this.priceModel = data.price_model;
        this.createdAt = new Date(data.created_at);
    }

    // Getter methods...
    getId() { return this.id; }
    getUserId() { return this.userId; }

}



// Usage:
/*const appData = {
    id: 1,
    user_id: "123abc",
    category_id: 5,
    // etc...
    created_at: "2020-01-01T12:00:00Z"
}

const app = new App(appData);
console.log(app.getId()); // Prints 1
console.log(app.getUserId()); // Prints "123abc"
console.log(app.getCreatedAt());
  // Prints 2020-01-01T12:00:00.000Z*/