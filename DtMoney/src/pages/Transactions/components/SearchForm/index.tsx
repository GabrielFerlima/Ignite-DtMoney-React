import { MagnifyingGlass } from "phosphor-react";
import { useForm } from "react-hook-form";
import { SeachFormContainer } from "./styles";
import * as z from 'zod'
import {zodResolver} from '@hookform/resolvers/zod'

const searchFormSchema = z.object({
    query: z.string(),
})
   
type SearchFormInputs = z.infer<typeof searchFormSchema>

export function SeachForm() {
    const { register, handleSubmit, formState: {isSubmitting} } = useForm<SearchFormInputs>({
        resolver: zodResolver(searchFormSchema)
    })


    function handleSearchTransactions(data:SearchFormInputs ) {
        console.log(data)
    } 

    return(
        <SeachFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
            <input type="text" 
            placeholder="Busque por transações" 
            {...register('query')}
            />

            <button type="submit" disabled={isSubmitting}>
                 Buscar
            <MagnifyingGlass size={20}/>

            </button>
        </SeachFormContainer>
    )
}