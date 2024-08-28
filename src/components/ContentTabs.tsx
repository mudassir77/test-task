'use client'
import { CONTENT_OPTIONS, MUSIC_STORE } from "@/constants/common";
import React, { useState } from "react";
import GeneralInformation from "./GeneralInformation";

const ContentTabs = () => {
    const [tabSelected, setTabSelected] = useState<string>('General Information')
    console.log("tabSelected", tabSelected)
    const renderContent = () => {
        switch (tabSelected) {
            case 'General Information':
                return <GeneralInformation />;
            case 'Analytics':
                return <GeneralInformation />;  // Replace with the analytics component
            case 'Related':
                return <GeneralInformation />;  
            case 'Stores':
                return <GeneralInformation />;
            default:
                return null;
        }
    };
    return (
        <>
            <div className="flex border-b-2 border-slate-300/30">
                {CONTENT_OPTIONS.map((item, idx) => {
                    return (
                        <div
                            onClick={() => setTabSelected(String(item))}
                            className={`text-black cursor-pointer px-5 hover:text-primaryBlue hover:font-bold pb-3 leading-8 text-sm ${tabSelected === String(item) && 'border-b-4 font-bold text-primaryBlue border-primaryBlue'}`}
                            key={idx}
                        >
                            {item}
                        </div>
                    );
                })}
            </div>
            {renderContent()}
        </>
    )
}

export default React.memo(ContentTabs);
