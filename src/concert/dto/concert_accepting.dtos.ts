import {  IsNotEmpty ,IsDate} from "class-validator";
export class Create_sccceptingDto {
    
  @IsNotEmpty()
  id: number
  @IsNotEmpty()
  buyer_id: number

  @IsNotEmpty()
  Concert_name: string

  @IsNotEmpty()
  reciever_id: number
  
}