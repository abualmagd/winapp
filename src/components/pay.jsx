

import { loadScript } from "@paypal/paypal-js";
import { useCallback, useEffect } from "react";
import { updateAppPlan } from "../services/appServices";


export function PayWall({ toolId, planId, planName }) {


  const updateTool = useCallback(async (subId) => {

    try {
      await updateAppPlan(subId, planName, toolId);
      console.log('updated ////////////       koool');
    } catch (error) {
      console.log(error);
    }
  }, [planName, toolId]);
  useEffect(() => {
    loadScript({
      "client-id": process.env.REACT_APP_CLIENT_ID,
      vault: true,
      intent: "subscription",
      "data-sdk-integration-source": "button-factory"
    }).then((paypal) => {
      paypal.Buttons({
        style: {
          shape: 'rect',
          color: 'gold',
          layout: 'vertical',
          label: 'subscribe'
        },
        createSubscription: function (data, actions) {
          return actions.subscription.create({
            application_context: {
              shipping_preference: 'NO_SHIPPING',
            },
            /* Creates the subscription */
            plan_id: planId
          });
        },
        onError: function (error) {
          console.log(error);
        },

        onCancel: function (data, actions) {
          console.log(data);

        },
        onApprove: function (data, actions) {
          // You can add optional success message for the subscriber here
          console.log(data);
          console.log('sups-id ', data.subscriptionID);
          updateTool(data.subscriptionID);
          actions.redirect('http://solutrend.com/payment')
        }

      }).render('#paypal-button-container-P-74D89268MU7706432MTFBNQY');
    });

  }, [planId, updateTool])

  return (
    <div id="paypal-button-container-P-74D89268MU7706432MTFBNQY">


    </div>
  );
}






