interface iMedical{
    doctorNme: string;
    hospitalName: string;
    diagnosis: string;
    cost: number;
    status: string;
    member: {};
}


interface iMember{
    firstNme: string;
    middleName: string;
    lastName: string;
    email: string;
    avatar: string;
    avatarID: string;
    status: string;
    user: {};
    medicalHistory: Array<{}>;
}


interface iUser{
    firstNme: string;
    middleName: string;
    lastName: string;
    email: string;
    avatar: string;
    avatarID: string;
    token: string;
    verify: boolean;
    status: string;
    members: Array<{}>;
    medicalHistory: Array<{}>;
}

export interface iUserData extends iUser, Document {}
export interface iMemberData extends iMember, Document {}
export interface iMedicalData extends iMedical, Document {}