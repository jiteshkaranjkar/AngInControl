export class AuditCompleted {
    UserId: number;
    CategoryId: number;
    StartMillis: number;
    EndMillis: number;
    SelectedAttributes: Attributes[];
}


export class Attributes {
    TypeId: number;
    AttributeId: number;
}


export class CategoryCompletedAuditsOverTime
{
    Id:number;
    DateLabel: string;
    CompletedAuditCount:number;
    PassedAuditCount:number;
    FailedAuditCount:number;
}


export class CompletedAuditsColored
{
    Id:number;
    DateLabel: string;
    CompletedAuditCount:number;
    PassedAuditCount:number;
    FailedAuditCount:number;
    Color: string;
}