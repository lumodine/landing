import axios from "@/lib/axios";

const getAll = async () => {
  const {data} = await axios.get("/languages");

  return data;
};

export default {
  getAll,
};
