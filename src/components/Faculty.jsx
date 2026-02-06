import React from 'react';

const Faculty = () => {
    const teachers = [
        {
            id: 1,
            name: "Dr. Anjali Sharma",
            designation: "Principal",
            qualification: "Ph.D. in Education",
            image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80"
        },
        {
            id: 2,
            name: "Mr. Rajeev Verma",
            designation: "Vice Principal",
            qualification: "M.Sc. Physics",
            image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&q=80"
        },
        {
            id: 3,
            name: "Mrs. Kavita Singh",
            designation: "Senior Mathematics Teacher",
            qualification: "M.Sc. Mathematics, B.Ed.",
            image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80"
        },
        {
            id: 4,
            name: "Mr. Amit Patel",
            designation: "Sports Director",
            qualification: "B.P.Ed, M.P.Ed",
            image: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=400&q=80"
        },
        {
            id: 5,
            name: "Ms. Priya Desai",
            designation: "Science Coordinator",
            qualification: "M.Sc. Chemistry",
            image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80"
        },
        {
            id: 6,
            name: "Mr. Suresh Kumar",
            designation: "Computer Science HOD",
            qualification: "MCA",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80"
        }
    ];

    return (
        <div className="container page-content">
            <h1 className="text-3d-shadow" style={{ textAlign: 'center', marginBottom: '3rem' }}>Meet Our Faculty</h1>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                gap: '2.5rem',
                perspective: '1000px'
            }}>
                {teachers.map((teacher) => (
                    <div key={teacher.id} className="card-3d" style={{ height: '100%' }}>
                        <div className="card-inner-3d" style={{
                            padding: '0',
                            height: '100%',
                            overflow: 'hidden',
                            display: 'flex',
                            flexDirection: 'column'
                        }}>
                            <div style={{
                                height: '250px',
                                overflow: 'hidden'
                            }}>
                                <img
                                    src={teacher.image}
                                    alt={teacher.name}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        transition: 'transform 0.5s'
                                    }}
                                    className="faculty-img"
                                />
                            </div>
                            <div style={{ padding: '1.5rem', textAlign: 'center', flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                {/* Name removed as requested */}
                                {/* <h3 style={{ marginBottom: '0.5rem', color: '#003366' }}>{teacher.name}</h3> */}
                                <p style={{ color: '#DAA520', fontWeight: 'bold', marginBottom: '0.5rem', fontSize: '1.2rem' }}>{teacher.designation}</p>
                                <p style={{ color: '#666', fontSize: '0.9rem' }}>{teacher.qualification}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <style jsx>{`
                .card-3d:hover .faculty-img {
                    transform: scale(1.1);
                }
            `}</style>
        </div>
    );
};

export default Faculty;
