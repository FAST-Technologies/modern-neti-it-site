import React from "react";


export interface team {
    id?: number
    name: string
    job: string
    description: string
    img: string
}

export type popup = {
    account: boolean
    setAccount: (account: boolean) => void
    children?: React.ReactNode
}

export type Project = {
    id?: number
    img: string,
    title: string,
    result: string,
    tasks: string,
}

export type TeamMember = {
    id1?: number
    img1: string,
    name: string,
    job: string,
}

export interface myComp {
    props: { id?: number, id1?: number, result: string, img: string, title: string, tasks: string, name: string, job: string, img1: string },
}