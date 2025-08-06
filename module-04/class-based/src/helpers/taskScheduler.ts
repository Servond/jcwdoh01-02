import cron from "node-cron";
import { UserDAL } from "../dal/user.dal";

export default function taskScheduler() {
  // * bintang pertama untuk detik (optional)
  // * bintang kedua untuk menit
  // * bintang ketiga untuk jam
  // * bintang keempat untuk hari dalam bulan
  // * bintang kelima untuk bulan
  // * bintang keenam untuk hari dalam minggu
  cron.schedule("*/2 * * * *", async () => {
    await UserDAL.updateActiveUserDal();
  });
}
