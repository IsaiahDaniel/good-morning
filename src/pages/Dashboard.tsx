import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../config/firebase";
import { signOut } from "firebase/auth";
import { AiOutlineLogout } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { instance as axios } from "../config";

type Props = {};

const Dashboard = (props: Props) => {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  console.log("user", user);

  const signOutHandler = () => {
    console.log("ran signOutHandler");
    signOut(auth);
    navigate("/");
  }

  useEffect(() => {
    if (user) {
      const checkTweets = async () => {
        const response = await axios.get(
          `/api/v1/tweets/user/${user?.uid}`
        );
        console.log("response", response);
      };
      checkTweets();
    } else {
        signOutHandler();
    }
  }, []);

  if (loading) return <h2>Checking tweets...</h2>;

  return (
    <div className="w-full md:w-[50%] mx-auto px-5 md:p-0">
      <h2 className="text-3xl mb-5 text-white font-extrabold">Dashboard</h2>
      <div className={`shadow-lg rounded-lg p-4 bg-white divide-y`}>
        <div className="flex justify-between items-center py-4">
          <h2>{user?.displayName}</h2>
          <img src={user ? user?.photoURL : null} />
        </div>

        {/* <div>
            
            { error && (
                <p>{error}</p> 
            )}
        </div> */}

        <div className="py-4">
          <h2 className="font-bold text-3xl">Total Points</h2>
          <p className="text-2xl mt-2">7000</p>
        </div>

        <div
          className="flex items-center justify-end py-5 cursor-pointer"
          onClick={() => {
            auth.signOut();
            navigate("/");
          }}
        >
          <AiOutlineLogout />
          <p>Logout</p>
        </div>
      </div>
    </div>
  );
};

// {
//     "user": {
//         "uid": "h6arUrscJha3jAqcpIWAXe4S7Sd2",
//         "emailVerified": false,
//         "displayName": "Easy_daniels",
//         "isAnonymous": false,
//         "photoURL": "https://pbs.twimg.com/profile_images/1248894675534188544/tKZcX8oA_normal.jpg",
//         "providerData": [
//             {
//                 "providerId": "twitter.com",
//                 "uid": "1248891267393691649",
//                 "displayName": "Easy_daniels",
//                 "email": null,
//                 "phoneNumber": null,
//                 "photoURL": "https://pbs.twimg.com/profile_images/1248894675534188544/tKZcX8oA_normal.jpg"
//             }
//         ],
//         "stsTokenManager": {
//             "refreshToken": "AMf-vBxhlDzUFRWd053_twf0DOY_YFaxRXURllMHQrAlz2FuwdKcFCpYknvgvz95ZTv0bMqX8W1BZG6DD_VU33Xz_LTELZRyRzPnbktxntrNi9hv4OB33rTt7iJLi0Ef2TCwxtp9kyFaYYJJNhTMih212gGEQYcMU6Gjg3scJsbYx5twHsI0JPV_5IaYjvKKFXe5r-ZLBEddU99GFj1stqKq7debDAzj2xukKb9wc-085C49ibQw637Tv3lavV3WFPckUveppqp8V14bQWnHJSNO31_t9xP1S8Hh17tr3GXdWYib2eCtaE_htrTuxuL0a1Fvm3AKZxNXHocgcGZBkAx2tGHKFNsjAOWO7n5KXZHre3WY8mqsAaI",
//             "accessToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImFkNWM1ZTlmNTdjOWI2NDYzYzg1ODQ1YTA4OTlhOWQ0MTI5MmM4YzMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiRWFzeV9kYW5pZWxzIiwicGljdHVyZSI6Imh0dHBzOi8vcGJzLnR3aW1nLmNvbS9wcm9maWxlX2ltYWdlcy8xMjQ4ODk0Njc1NTM0MTg4NTQ0L3RLWmNYOG9BX25vcm1hbC5qcGciLCJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vdXBzLWNsb25lLTU2NmQ2IiwiYXVkIjoidXBzLWNsb25lLTU2NmQ2IiwiYXV0aF90aW1lIjoxNjk1NTQ3NTY2LCJ1c2VyX2lkIjoiaDZhclVyc2NKaGEzakFxY3BJV0FYZTRTN1NkMiIsInN1YiI6Img2YXJVcnNjSmhhM2pBcWNwSVdBWGU0UzdTZDIiLCJpYXQiOjE2OTU1NDc1NjYsImV4cCI6MTY5NTU1MTE2NiwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJ0d2l0dGVyLmNvbSI6WyIxMjQ4ODkxMjY3MzkzNjkxNjQ5Il19LCJzaWduX2luX3Byb3ZpZGVyIjoidHdpdHRlci5jb20ifX0.hVfBaHIOV4BsSadozkSdG4UJ-Ewk5EE1Z1g9_b_kRS5zOnHvhC8ZsEmOObyLl22w7pVqUSeDewtqg-XF7ICpUYKT3EYWqgxO-hodxcnTM_TMDr5Pa5C3EJ8l9NBR9r_jiJSmwjI2AreipbYAS4uC69sv09Mk5qYPsn7NWxy17gbtyHlAifqeIrikA4zM84zPdP3sf0kVY7n8BTf1Yv-2aN1sMLLvoSPrY2J6oyMyxxc6RPHL6W9zn11p_YePWhoLBhUZuJbmsJ3jmpxQ9UkYKieOfU-UIToIOHdzQO2_aI6TOaJvpyGnyFVFyh6-prL-8Z7qRFavZzpMZ8XGHWhZOw",
//             "expirationTime": 1695551166373
//         },
//         "createdAt": "1695547566232",
//         "lastLoginAt": "1695547566232",
//         "apiKey": "AIzaSyCOyDKDh0BhdMWj2onrdd6kwXoLdKNtCzI",
//         "appName": "[DEFAULT]"
//     },
//     "providerId": "twitter.com",
//     "_tokenResponse": {
//         "federatedId": "http://twitter.com/1248891267393691649",
//         "providerId": "twitter.com",
//         "emailVerified": false,
//         "fullName": "Easy_daniels",
//         "photoUrl": "https://pbs.twimg.com/profile_images/1248894675534188544/tKZcX8oA_normal.jpg",
//         "localId": "h6arUrscJha3jAqcpIWAXe4S7Sd2",
//         "displayName": "Easy_daniels",
//         "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImFkNWM1ZTlmNTdjOWI2NDYzYzg1ODQ1YTA4OTlhOWQ0MTI5MmM4YzMiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiRWFzeV9kYW5pZWxzIiwicGljdHVyZSI6Imh0dHBzOi8vcGJzLnR3aW1nLmNvbS9wcm9maWxlX2ltYWdlcy8xMjQ4ODk0Njc1NTM0MTg4NTQ0L3RLWmNYOG9BX25vcm1hbC5qcGciLCJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vdXBzLWNsb25lLTU2NmQ2IiwiYXVkIjoidXBzLWNsb25lLTU2NmQ2IiwiYXV0aF90aW1lIjoxNjk1NTQ3NTY2LCJ1c2VyX2lkIjoiaDZhclVyc2NKaGEzakFxY3BJV0FYZTRTN1NkMiIsInN1YiI6Img2YXJVcnNjSmhhM2pBcWNwSVdBWGU0UzdTZDIiLCJpYXQiOjE2OTU1NDc1NjYsImV4cCI6MTY5NTU1MTE2NiwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJ0d2l0dGVyLmNvbSI6WyIxMjQ4ODkxMjY3MzkzNjkxNjQ5Il19LCJzaWduX2luX3Byb3ZpZGVyIjoidHdpdHRlci5jb20ifX0.hVfBaHIOV4BsSadozkSdG4UJ-Ewk5EE1Z1g9_b_kRS5zOnHvhC8ZsEmOObyLl22w7pVqUSeDewtqg-XF7ICpUYKT3EYWqgxO-hodxcnTM_TMDr5Pa5C3EJ8l9NBR9r_jiJSmwjI2AreipbYAS4uC69sv09Mk5qYPsn7NWxy17gbtyHlAifqeIrikA4zM84zPdP3sf0kVY7n8BTf1Yv-2aN1sMLLvoSPrY2J6oyMyxxc6RPHL6W9zn11p_YePWhoLBhUZuJbmsJ3jmpxQ9UkYKieOfU-UIToIOHdzQO2_aI6TOaJvpyGnyFVFyh6-prL-8Z7qRFavZzpMZ8XGHWhZOw",
//         "context": "",
//         "oauthAccessToken": "1248891267393691649-S6NhyTMoZo4IDaxX5RMimjp8gtdxsS",
//         "oauthTokenSecret": "KMYOI2q3I7jMrrAyIZNOd9p32f6hFVIQeAX2Jk7pdhhfD",
//         "refreshToken": "AMf-vBxhlDzUFRWd053_twf0DOY_YFaxRXURllMHQrAlz2FuwdKcFCpYknvgvz95ZTv0bMqX8W1BZG6DD_VU33Xz_LTELZRyRzPnbktxntrNi9hv4OB33rTt7iJLi0Ef2TCwxtp9kyFaYYJJNhTMih212gGEQYcMU6Gjg3scJsbYx5twHsI0JPV_5IaYjvKKFXe5r-ZLBEddU99GFj1stqKq7debDAzj2xukKb9wc-085C49ibQw637Tv3lavV3WFPckUveppqp8V14bQWnHJSNO31_t9xP1S8Hh17tr3GXdWYib2eCtaE_htrTuxuL0a1Fvm3AKZxNXHocgcGZBkAx2tGHKFNsjAOWO7n5KXZHre3WY8mqsAaI",
//         "expiresIn": "3600",
//         "screenName": "DanielsEasy",
//         "rawUserInfo": "{\"utc_offset\":null,\"needs_phone_verification\":false,\"friends_count\":23,\"profile_image_url_https\":\"https://pbs.twimg.com/profile_images/1248894675534188544/tKZcX8oA_normal.jpg\",\"listed_count\":0,\"profile_background_image_url\":null,\"default_profile_image\":false,\"favourites_count\":49,\"description\":\"I stand for #everthing that promotes God ||\\n\\n#nextjs, #node, #react, #angular, #devops ||\\n\\nAm a small programmer, and i love It ||\",\"created_at\":\"Sat Apr 11 08:34:08 +0000 2020\",\"is_translator\":false,\"withheld_in_countries\":[],\"profile_background_image_url_https\":null,\"protected\":false,\"screen_name\":\"DanielsEasy\",\"id_str\":\"1248891267393691649\",\"profile_link_color\":\"1DA1F2\",\"is_translation_enabled\":false,\"translator_type\":\"none\",\"id\":1248891267393691649,\"geo_enabled\":false,\"profile_background_color\":\"F5F8FA\",\"lang\":null,\"has_extended_profile\":false,\"profile_sidebar_border_color\":\"C0DEED\",\"profile_text_color\":\"333333\",\"verified\":false,\"profile_image_url\":\"http://pbs.twimg.com/profile_images/1248894675534188544/tKZcX8oA_normal.jpg\",\"time_zone\":null,\"url\":null,\"contributors_enabled\":false,\"suspended\":false,\"profile_background_tile\":false,\"profile_banner_url\":\"https://pbs.twimg.com/profile_banners/1248891267393691649/1655030528\",\"entities\":{\"description\":{\"urls\":[]}},\"statuses_count\":29,\"follow_request_sent\":false,\"followers_count\":5,\"profile_use_background_image\":true,\"default_profile\":true,\"following\":false,\"name\":\"Easy_daniels\",\"location\":\"Federal Capital Territory, Nig\",\"profile_sidebar_fill_color\":\"DDEEF6\",\"notifications\":false,\"status\":{\"extended_entities\":{\"media\":[{\"display_url\":\"pic.twitter.com/iuoGo4CPHK\",\"source_user_id\":1680650056809033731,\"type\":\"photo\",\"media_url\":\"http://pbs.twimg.com/media/F6W3xyyWQAEKSO4.jpg\",\"source_status_id\":1703970279821640162,\"url\":\"https://t.co/iuoGo4CPHK\",\"indices\":[104,127],\"sizes\":{\"small\":{\"w\":680,\"h\":383,\"resize\":\"fit\"},\"large\":{\"w\":1920,\"h\":1080,\"resize\":\"fit\"},\"thumb\":{\"w\":150,\"h\":150,\"resize\":\"crop\"},\"medium\":{\"w\":1200,\"h\":675,\"resize\":\"fit\"}},\"id_str\":\"1703970100104019969\",\"expanded_url\":\"https://twitter.com/tipcoineth/status/1703970279821640162/photo/1\",\"source_status_id_str\":\"1703970279821640162\",\"media_url_https\":\"https://pbs.twimg.com/media/F6W3xyyWQAEKSO4.jpg\",\"id\":1703970100104019969,\"source_user_id_str\":\"1680650056809033731\"}]},\"in_reply_to_status_id_str\":null,\"in_reply_to_status_id\":null,\"created_at\":\"Sat Sep 23 22:30:41 +0000 2023\",\"in_reply_to_user_id_str\":null,\"source\":\"<a href=\\\"https://mobile.twitter.com\\\" rel=\\\"nofollow\\\">Twitter Web App<\\/a>\",\"retweeted_status\":{\"extended_entities\":{\"media\":[{\"display_url\":\"pic.twitter.com/iuoGo4CPHK\",\"indices\":[88,111],\"sizes\":{\"small\":{\"w\":680,\"h\":383,\"resize\":\"fit\"},\"large\":{\"w\":1920,\"h\":1080,\"resize\":\"fit\"},\"thumb\":{\"w\":150,\"h\":150,\"resize\":\"crop\"},\"medium\":{\"w\":1200,\"h\":675,\"resize\":\"fit\"}},\"id_str\":\"1703970100104019969\",\"expanded_url\":\"https://twitter.com/tipcoineth/status/1703970279821640162/photo/1\",\"media_url_https\":\"https://pbs.twimg.com/media/F6W3xyyWQAEKSO4.jpg\",\"id\":1703970100104019969,\"type\":\"photo\",\"media_url\":\"http://pbs.twimg.com/media/F6W3xyyWQAEKSO4.jpg\",\"url\":\"https://t.co/iuoGo4CPHK\"}]},\"in_reply_to_status_id_str\":null,\"in_reply_to_status_id\":null,\"possibly_sensitive\":false,\"coordinates\":null,\"created_at\":\"Tue Sep 19 03:12:27 +0000 2023\",\"truncated\":false,\"in_reply_to_user_id_str\":null,\"source\":\"<a href=\\\"https://mobile.twitter.com\\\" rel=\\\"nofollow\\\">Twitter Web App<\\/a>\",\"retweet_count\":153725,\"retweeted\":true,\"geo\":null,\"in_reply_to_screen_name\":null,\"is_quote_status\":false,\"entities\":{\"urls\":[],\"hashtags\":[],\"media\":[{\"display_url\":\"pic.twitter.com/iuoGo4CPHK\",\"indices\":[88,111],\"sizes\":{\"small\":{\"w\":680,\"h\":383,\"resize\":\"fit\"},\"large\":{\"w\":1920,\"h\":1080,\"resize\":\"fit\"},\"thumb\":{\"w\":150,\"h\":150,\"resize\":\"crop\"},\"medium\":{\"w\":1200,\"h\":675,\"resize\":\"fit\"}},\"id_str\":\"1703970100104019969\",\"expanded_url\":\"https://twitter.com/tipcoineth/status/1703970279821640162/photo/1\",\"media_url_https\":\"https://pbs.twimg.com/media/F6W3xyyWQAEKSO4.jpg\",\"id\":1703970100104019969,\"type\":\"photo\",\"media_url\":\"http://pbs.twimg.com/media/F6W3xyyWQAEKSO4.jpg\",\"url\":\"https://t.co/iuoGo4CPHK\"}],\"user_mentions\":[],\"symbols\":[]},\"id_str\":\"1703970279821640162\",\"in_reply_to_user_id\":null,\"favorite_count\":101077,\"id\":1703970279821640162,\"text\":\"Epoch 3 is now live! \\n\\nOur final Twitter Epoch ends 09/29 \\n\\nPlatform rewards to follow😉 https://t.co/iuoGo4CPHK\",\"place\":null,\"contributors\":null,\"lang\":\"en\",\"favorited\":false},\"retweet_count\":153725,\"retweeted\":true,\"geo\":null,\"in_reply_to_screen_name\":null,\"is_quote_status\":false,\"id_str\":\"1705711311823511698\",\"in_reply_to_user_id\":null,\"favorite_count\":0,\"id\":1705711311823511698,\"text\":\"RT @tipcoineth: Epoch 3 is now live! \\n\\nOur final Twitter Epoch ends 09/29 \\n\\nPlatform rewards to follow😉 https://t.co/iuoGo4CPHK\",\"place\":null,\"lang\":\"en\",\"favorited\":false,\"possibly_sensitive\":false,\"coordinates\":null,\"truncated\":false,\"entities\":{\"urls\":[],\"hashtags\":[],\"media\":[{\"display_url\":\"pic.twitter.com/iuoGo4CPHK\",\"source_user_id\":1680650056809033731,\"type\":\"photo\",\"media_url\":\"http://pbs.twimg.com/media/F6W3xyyWQAEKSO4.jpg\",\"source_status_id\":1703970279821640162,\"url\":\"https://t.co/iuoGo4CPHK\",\"indices\":[104,127],\"sizes\":{\"small\":{\"w\":680,\"h\":383,\"resize\":\"fit\"},\"large\":{\"w\":1920,\"h\":1080,\"resize\":\"fit\"},\"thumb\":{\"w\":150,\"h\":150,\"resize\":\"crop\"},\"medium\":{\"w\":1200,\"h\":675,\"resize\":\"fit\"}},\"id_str\":\"1703970100104019969\",\"expanded_url\":\"https://twitter.com/tipcoineth/status/1703970279821640162/photo/1\",\"source_status_id_str\":\"1703970279821640162\",\"media_url_https\":\"https://pbs.twimg.com/media/F6W3xyyWQAEKSO4.jpg\",\"id\":1703970100104019969,\"source_user_id_str\":\"1680650056809033731\"}],\"user_mentions\":[{\"indices\":[3,14],\"screen_name\":\"tipcoineth\",\"id_str\":\"1680650056809033731\",\"name\":\"tipcoin\",\"id\":1680650056809033731}],\"symbols\":[]},\"contributors\":null}}",
//         "isNewUser": true,
//         "kind": "identitytoolkit#VerifyAssertionResponse"
//     },
//     "operationType": "signIn"
// }

export default Dashboard;
