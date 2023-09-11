import { MonthApps } from "../components/monthTools";
import { PageMetaTags } from "../components/myMetTage";
import { myUrl } from "../services/global";
import AppBar from "../components/appBar";
import MyFooter from "../components/footer";
import React from "react";

export function Ranking() {

    return <div className="main">
        <PageMetaTags title={'monthly ranking'}
            url={myUrl + '/ranking'}
            description={'the top three software tools monthly based on a variety of factors, including ease of use, features, customer satisfaction, and pricing."'} />
        <AppBar />
        <MonthApps />
        <div className="space-ranking"></div>
        <MyFooter />
    </div>


}