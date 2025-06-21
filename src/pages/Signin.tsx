import { Button } from "../components/ui/Button";
import Input from "../components/ui/Input";

export function Signin(){ 
      return <div className="h-screen w-screen bg-gray-200 flex justify-center items-center "> 
            <div className="bg-white rounded-xl border min-w-48 p-8 "> 
                <Input placeholder={"username"} />
                <Input placeholder={"password"} /> 
                <div className="flex justify-center pt-4 items-center "> 
                <Button  variant="primary" size="md"  text="Signin" fullwidth={true} loading={false} /> 
             </div>
            </div>
      </div>
}