import { Container, Button } from 'react-bootstrap'

export default function Header({page}) {

    // TODO insert application name
	return (
		<Container fluid className='header w-100 p-3 d-flex  align-items-center' style={{
            backgroundColor: '#990000',
        }}>
			<h2 className='header-title text-white w-50'>Face Attendance</h2>
            {page == 'student_home' ? (
                <Container className='w-50 d-flex align-items-center justify-content-end'>
                    <Button className='header-button m-2'>Join Class</Button>
                    <Button className='header-button m-2'>Upload Image</Button>
                </Container>
            ) : page == 'teacher_home' ? (
                <Container className='w-50 d-flex align-items-center justify-content-end'>
                    <Button className='header-button m-2'>Create Class</Button>
                </Container>
            ) : (
                <Container>
                    
                </Container>
            )}
		</Container>
	);
}
