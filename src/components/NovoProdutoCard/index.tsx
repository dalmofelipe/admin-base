import { SubmitHandler, useForm } from "react-hook-form";
import Card from "../Card";

import "./styles.css";


type Inputs = {
  example: string
  exampleRequired: string
}

function NovoProdutoCard() {

    const {
        register,
        handleSubmit,
        // watch,
        formState: { errors },
    } = useForm<Inputs>()

    const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)
    
    return (
        <Card title="Novo Produto">
            <div className="npf">
                <form onSubmit={handleSubmit(onSubmit)}>
                    
                    <input defaultValue="test" {...register("example")} />

                    <input {...register("exampleRequired", { required: true })} />
                    
                    {errors.exampleRequired && <span>This field is required</span>}

                    <input type="submit" />

                </form>
            </div>
        </Card>
    )
}

export default NovoProdutoCard