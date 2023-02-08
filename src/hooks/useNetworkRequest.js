import { useState } from "react";

function useNetworkRequest() {
  const [fossilData, setFossilData] = useState([]);

  const requests = {
    fossilData,

    async getItems(endpoint) {
      try {
        const response = await fetch(
          `http://${
            process.env.REACT_APP_HOSTNAME || "localhost"
          }:8080${endpoint}`
        ).then((r) => {
          if (r.ok) {
            return r.json();
          }
        });
        return response;
      } catch (e) {
        throw new Error(e);
      }
    },

    async getFossils() {
      try {
        const response = await requests.getItems("/api/get/fossils");
        setFossilData(response);
      } catch (e) {
        throw new Error(e);
      }
    },

    async postItem(endpoint, payload) {
      return await fetch(
        `http://${
          process.env.REACT_APP_HOSTNAME || "localhost"
        }:8080${endpoint}`,
        {
          method: "POST",
          body: payload.formPayload || JSON.stringify(payload.customPayload),
          headers: payload.headers,
        }
      ).then((r) => r);
    },

    async putItem(endpoint, payload) {
      return await fetch(
        `http://${
          process.env.REACT_APP_HOSTNAME || "localhost"
        }:8080${endpoint}`,
        {
          method: "PUT",
          body: payload.formPayload || JSON.stringify(payload.customPayload),
          headers: payload.headers,
        }
      ).then((r) => r);
    },

    async deleteItem(endpoint, payload) {
      return await fetch(
        `http://${
          process.env.REACT_APP_HOSTNAME || "localhost"
        }:8080${endpoint}`,
        {
          method: "DELETE",
          body: JSON.stringify(payload),
          headers: {
            "Content-Type": "application/json",
          },
        }
      ).then((r) => r);
    },
  };

  return requests;
}

export default useNetworkRequest;
