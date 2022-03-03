import Button from '@material-tailwind/react/Button';
import Card from '@material-tailwind/react/Card';
import CardBody from '@material-tailwind/react/CardBody';
import CardFooter from '@material-tailwind/react/CardFooter';
import H5 from '@material-tailwind/react/Heading5';
import Image from '@material-tailwind/react/Image';
import LeadText from '@material-tailwind/react/LeadText';
import { BsFillMapFill } from 'react-icons/bs';
import { MdAccountBalance, MdMapsHomeWork } from 'react-icons/md';
import useFirebase from '../Hooks/useFirebase';



export default function ProfileCard() {
    const { user, admin, isLoading, authError, registerUser, loginUser, logout } = useFirebase();
    return (
        <Card>
            <div className="flex flex-wrap justify-center">
                <div className="w-48 px-4 -mt-24">
                    <Image src={user.photoURL} rounded raised width="600px"/>
                </div>
                <div className="w-full flex justify-center py-4 lg:pt-4 pt-8">
                    <div className="p-4 text-center">
                        <span className="text-xl font-medium block uppercase tracking-wide text-gray-900">
                            22
                        </span>
                        <span className="text-sm text-gray-700">Customers</span>
                    </div>
                    <div className="p-4 text-center">
                        <span className="text-xl font-medium block uppercase tracking-wide text-gray-900">
                            89
                        </span>
                        <span className="text-sm text-gray-700">Reviews</span>
                    </div>
                    <div className="p-4 text-center">
                        <span className="text-xl font-medium block uppercase tracking-wide text-gray-900">
                            10
                        </span>
                        <span className="text-sm text-gray-700">Orders</span>
                    </div>
                </div>
            </div>
            <div className="text-center">
                <H5 color="gray">{user.displayName}</H5>
                <div className="mt-0 mb-2 text-gray-700 flex items-center justify-center gap-2">
                    <BsFillMapFill/>
                    Los Angeles, California
                </div>
                <div className="mb-2 text-gray-700 mt-10 flex items-center justify-center gap-2">
                    <MdMapsHomeWork />
                    AltDevs Team Leader
                </div>
                <div className="mb-2 text-gray-700 flex items-center justify-center gap-2">
                    <MdAccountBalance />
                    Govt.Titumir College
                </div>
            </div>
            <CardBody>
                <div className="border-t border-lightBlue-200 text-center px-2 ">
                    <LeadText color="blueGray">
                        An artist of considerable range, Jenna the name taken by
                        Melbourne-raised, Brooklyn-based Nick Murphy writes,
                        performs and records all of his own music, giving it a
                        warm, intimate feel with a solid groove structure. An
                        artist of considerable range.
                    </LeadText>
                </div>
            </CardBody>
            <CardFooter>
                <div className="w-full flex justify-center -mt-8">
                    <a
                        href="#pablo"
                        className="mt-5"
                        onClick={(e) => e.preventDefault()}
                    >
                        <Button color="purple" buttonType="link" ripple="dark">
                            Show more
                        </Button>
                    </a>
                </div>
            </CardFooter>
        </Card>
    );
}
