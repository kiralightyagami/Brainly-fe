import { Button } from "../components/Button";
import { Input } from "../components/Input";

export function Signup(){
    return <div className="h-screen w-screen bg-gray-200 flex
    justify-center items-center">
        <div className="bg-white rounded-xl border min-w-48 p-8">
            <Input placeholder="Username"/>
            <Input placeholder="Password"/>
            <div className="flex justify-center pt-4">
               <Button loading={true} variant="primary" text="Signup" fullWidth={true}/>
            </div>
            

        </div>
    </div>
}