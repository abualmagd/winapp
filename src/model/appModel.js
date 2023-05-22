

export class APP {

    constructor(userId, categoryId, planName, appName, appUrl, calendlyUrl,
        whatApp, description, contactEmail, shotUrl, whoNeed, whyUse, alternatives,
        startPrice, feesPer, logoUrl, priceModel, devices) {
        this.userId = userId;
        this.categoryId = categoryId;
        this.planName = planName;
        this.appName = appName;
        this.appUrl = appUrl;
        this.calendlyUrl = calendlyUrl;
        this.whatApp = whatApp;
        this.description = description;
        this.contactEmail = contactEmail;
        this.shotUrl = shotUrl;
        this.calendlyUrl = calendlyUrl;
        this.whoNeed = whoNeed;
        this.whyUse = whyUse;
        this.alternatives = alternatives;
        this.startPrice = startPrice;
        this.feesPer = feesPer;
        this.logoUrl = logoUrl;
        this.priceModel = priceModel;
        this.devices = devices;
    }

    fromDatat(data) {
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
        this.devices = data.devices;
    }

    toData() {
        return {
            user_id: this.userId,
            category_id: this.categoryId,
            app_name: this.appName,
            app_url: this.appUrl,
            calendly_url: this.calendlyUrl,
            what_app: this.whatApp,
            description: this.description,
            contact_email: this.contactEmail,
            who_need: this.whoNeed,
            why_use: this.whyUse,
            alternatives: this.alternatives,
            start_price: this.startPrice,
            fees_per: this.feesPer,
            price_model: this.priceModel,
            devices: this.devices
        };
    }

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