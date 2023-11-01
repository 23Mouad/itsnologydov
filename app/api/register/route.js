import { connectDB } from "@utils/database";
import User from "@models/User";
import bcrypt from "bcryptjs";

export const POST = async (req) => {
   // const hashedPassword = await bcrypt.hash(password, 10);
   try {
      await connectDB();
      const { name, email, number } = await req.json();
      await User.create({ name, email, number });

      return new Response("secuss", { status: 200 });
   } catch (error) {
      console.log(error);
      return new Response(JSON.stringify(error), { status: 500 });
   }
};
