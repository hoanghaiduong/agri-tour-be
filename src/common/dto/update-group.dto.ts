import { ApiProperty, PartialType } from "@nestjs/swagger";
import { CreateGroupDto } from "./create-group.dto";

export class UpdateGroupDto extends PartialType(CreateGroupDto){}