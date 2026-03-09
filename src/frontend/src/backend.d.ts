import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export type Time = bigint;
export interface ContactSubmission {
    serviceType: ServiceType;
    name: string;
    email: string;
    message: string;
    timestamp: Time;
    phone: string;
}
export enum ServiceType {
    builderClean = "builderClean",
    windowCleaning = "windowCleaning",
    commercial = "commercial",
    ovenCleaning = "ovenCleaning",
    endOfLease = "endOfLease",
    tileAndGrout = "tileAndGrout",
    pressureWashing = "pressureWashing",
    carpetCleaning = "carpetCleaning",
    officeCleaning = "officeCleaning"
}
export interface backendInterface {
    getAllSubmissions(): Promise<Array<ContactSubmission>>;
    getEnquiryCount(): Promise<bigint>;
    getFilteredSortedSubmissions(serviceType: ServiceType | null): Promise<Array<ContactSubmission>>;
    submitContactForm(name: string, email: string, phone: string, serviceType: ServiceType, message: string): Promise<boolean>;
}
