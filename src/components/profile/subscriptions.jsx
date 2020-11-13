import React, { useState, useEffect } from "react";
import axios from "../../axios/index";
import { ACCESS_TOKEN_NAME, API_BASE_URL } from "../../constants/apiConstants";
import ButtonAccount from "./miniComponents/button";
import MessageAccount from "./miniComponents/message";
import ProfileSectionTitle from "./miniComponents/profilesectionTitle";
import Link from "@material-ui/core/Link";

import "./content.css";

const Subscriptions = () => {
  const [subscriptions, setSubscriptions] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const { token } = await JSON.parse(
        localStorage.getItem(ACCESS_TOKEN_NAME)
      );
      const response = await axios.get(API_BASE_URL + "/subscriptions", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setSubscriptions(response.data.subscriptions)
    }
    fetchData();
  }, []);

  return (
    <div>
      <ProfileSectionTitle>
        <div>Subscriptions</div>
        <div>Manage your subscription plans</div>
      </ProfileSectionTitle>
      <div className="content">
        <MessageAccount>
          You have {subscriptions.length} subscription plan on your page.
        </MessageAccount>
        <Link href="/subscription-plans">
          <ButtonAccount>VIEW PLANS</ButtonAccount>
        </Link>
      </div>
    </div>
  );
};

export default Subscriptions;
