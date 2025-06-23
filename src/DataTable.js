import React, { useState, useRef, useEffect } from 'react';
import './DataTable.css';

const data = [
    {
        status: 'Online',
        type: 'Conversion',
        details: '',
        landUseRev: '',
        stage1: '',
        jobFiled: '',
        dob: '3322374',
        address: '80 4th Avenue',
        stage2: '',
        stage3: '',
        onlineYear: '2005 (1H)',
        la: '',
        lad: '',
        pn: '',
        units: 1,
        bldgInProjects: 1,
        buildings: 1,
        name: 'Huntington',
    },
    {
        status: 'Online',
        type: 'Construction',
        details: '',
        landUseRev: 'DM - 10/27/2008',
        stage1: '',
        jobFiled: '12/28/2007',
        dob: '1088695',
        address: '532 East 6th Street',
        stage2: 'NB - 6/8/2011',
        stage3: 'PL - 12/13/2012',
        onlineYear: '2012 (2H)',
        la: 'SIGNED OFF',
        lad: '7/11/2013',
        pn: '',
        units: 1,
        bldgInProjects: 1,
        buildings: 1,
        name: '532 East 6th',
    },
];

export default function DataTable() {
    const [menuOpenIdx, setMenuOpenIdx] = useState(null);
    const menuRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                setMenuOpenIdx(null);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className="table-wrapper">
            <table className="styled-table">
                <thead>
                <tr>
                    <th>Actions</th>
                    <th>Status</th>
                    <th>Const./Conv.</th>
                    <th>Details</th>
                    <th>Land Use Rev.</th>
                    <th>Stage 1</th>
                    <th>Job Filed</th>
                    <th>DOB #</th>
                    <th>Addresses</th>
                    <th>Stage 2</th>
                    <th>Stage 3</th>
                    <th>Online Year</th>
                    <th>LA</th>
                    <th>LAD</th>
                    <th>PN</th>
                    <th># Units in Projects</th>
                    <th># Bldg in Projects</th>
                    <th># of Buildings</th>
                    <th>Name</th>
                </tr>
                </thead>
                <tbody>
                {data.map((row, idx) => (
                    <tr
                        key={idx}
                        className={menuOpenIdx === idx ? 'row-active' : idx % 2 === 0 ? 'row-even' : 'row-odd'}
                    >
                        <td className="action-cell">
                            <button
                                className="grid-icon"
                                onClick={() => setMenuOpenIdx(menuOpenIdx === idx ? null : idx)}
                            >
                                <i className="icon-grid">▦</i>
                            </button>
                            {menuOpenIdx === idx && (
                                <div className="action-menu" ref={menuRef}>
                                    <div className="section">
                                        <div className="section-title">Actions</div>
                                        <div className="menu-item"><i className="icon">👁</i> See Details</div>
                                        <div className="menu-item"><i className="icon">💬</i> Add Comments</div>
                                    </div>
                                    <div className="section">
                                        <div className="section-title">Google</div>
                                        <div className="menu-item"><i className="icon">📍</i> Map it</div>
                                        <div className="menu-item"><i className="icon">🔍</i> Search</div>
                                    </div>
                                    <div className="section">
                                        <div className="section-title">Att. General</div>
                                        <div className="menu-item"><i className="icon">🔗</i> CP - N/A</div>
                                        <div className="menu-item"><i className="icon">🔗</i> CD - N/A</div>
                                    </div>
                                    <div className="section">
                                        <div className="section-title">All Others</div>
                                        <div
                                            className="menu-item"
                                            onClick={() => {
                                                const bin = row.dob;
                                                window.open(`https://a810-dobnow.nyc.gov/publish/Index.html#!/?bin=${bin}`, '_blank');
                                            }}

                                        >
                                            <i className="icon">🔗</i> Search DOB
                                        </div>


                                        <div className="menu-item"><i className="icon">🔗</i> ULURP</div>
                                        <div className="menu-item"><i className="icon">🔗</i> CEQR</div>
                                    </div>
                                </div>
                            )}
                        </td>
                        <td>{row.status}</td>
                        <td>{row.type}</td>
                        <td>{row.details}</td>
                        <td>{row.landUseRev}</td>
                        <td>{row.stage1}</td>
                        <td>{row.jobFiled}</td>
                        <td>{row.dob}</td>
                        <td>{row.address}</td>
                        <td>{row.stage2}</td>
                        <td>{row.stage3}</td>
                        <td>{row.onlineYear}</td>
                        <td>{row.la}</td>
                        <td>{row.lad}</td>
                        <td>{row.pn}</td>
                        <td>{row.units}</td>
                        <td>{row.bldgInProjects}</td>
                        <td>{row.buildings}</td>
                        <td>{row.name}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}
