import React from 'react';

export default function Home() {
    return (
        <div className="grid justify-center my-10">
            <h1 className="text-3xl font-bold text-green-600">Welcome to INNOVAINFO</h1>
            <div className="text-center">
                <p className="text-red-600">Admin Credentials</p>
                <p>
                    <span className="font-bold">Email:</span>
                    admin@admin.com
                </p>
                <p>
                    <span className="font-bold">Password:</span>
                    123456
                </p>
            </div>
        </div>
    );
}
