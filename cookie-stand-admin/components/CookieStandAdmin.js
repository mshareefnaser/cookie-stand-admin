import Head from 'next/head';
import Header from '../components/Header'
import CreateForm from '../components/CreateForm'
import ReportTable from '../components/ReportTable'
import Footer from '../components/Footer'
import { useState } from 'react';
import useResource from '../hooks/useResource';

export default function CookieStandAdmin() {
    
    const { resources, deleteResource } = useResource();

    //console.log(`resources: ${JSON.stringify(resources)}`)
    
    return (
        <>
            <Head>
                <title>Cookie Stand Admin</title>
                <button></button>
            </Head>
            <Header />
            <main>
                <CreateForm />
                <ReportTable cookieStandList={resources || []} deleteStand={deleteResource}/>
            </main>
            <Footer standNum={resources ? resources.length : 0}/>

        </>

    );
}