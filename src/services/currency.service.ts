import axios from "@/lib/axios";

const getAll = async () => {
  const {data} = await axios.get("/currencies");

  return data;
};

export default {
  getAll,
};
