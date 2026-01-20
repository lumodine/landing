import axios from "@/lib/axios";

const getPlans = async () => {
  const {data} = await axios.get("/subscriptions/plans");

  return data;
};

export default {
  getPlans,
};
