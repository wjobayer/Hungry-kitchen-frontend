import Card from '@material-tailwind/react/Card';
import CardHeader from '@material-tailwind/react/CardHeader';
import CardBody from '@material-tailwind/react/CardBody';
import Button from '@material-tailwind/react/Button';
import {MdOutlineDownloadDone} from 'react-icons/md'
import {RiDeleteBack2Fill} from 'react-icons/ri'
import {AiOutlineAlert} from 'react-icons/ai'
export default function PageVisitsCard() {
    return (
        <Card>
            <CardHeader className="bg-blue-600" color="blue" contentPosition="none">
                <div className="w-full flex items-center justify-between">
                    <div className='inline-flex'>
                    <h2 className="text-white text-2xl">Incomming Orders</h2>
                    <h2 className="text-white text-2xl ml-8"><AiOutlineAlert/></h2>
                    </div>
                    {/* <Button
                        color="transparent"
                        buttonType="link"
                        size="lg"
                        style={{ margin:1 }}
                    >
                        See More
                    </Button> */}
                </div>
            </CardHeader>
            <CardBody>
                <div className="overflow-x-auto">
                    <table className="items-center w-full bg-transparent border-collapse">
                        <thead>
                            <tr>
                                <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                                    Food Name
                                </th>
                                <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                                    Image
                                </th>
                                <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                                    Price
                                </th>
                                <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                                    Want To
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                Chicken Alfredo
                                </th>
                                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    
                                </td>
                                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    36 $
                                </td>
                                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                <div className='inline-flex'><Button
                                    color="transparent"
                                    buttonType="link"
                                    size="lg"
                                    title="Accept"
                                    style={{ margin:1 }}
                                >
                                    <MdOutlineDownloadDone/>
                                </Button>
                                <Button
                                    color="transparent"
                                    buttonType="link"
                                    size="lg"
                                    title="Delete"
                                    style={{ margin:1 }}
                                >
                                    <RiDeleteBack2Fill/>
                                   
                                </Button></div>
                                </td>
                            </tr>
                            <tr>
                                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                Chicken Alfredo
                                </th>
                                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    
                                </td>
                                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    36 $
                                </td>
                                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                <div className='inline-flex'><Button
                                    color="transparent"
                                    buttonType="link"
                                    size="lg"
                                    title="Accept"
                                    style={{ margin:1 }}
                                >
                                    <MdOutlineDownloadDone/>
                                </Button>
                                <Button
                                    color="transparent"
                                    buttonType="link"
                                    size="lg"
                                    title="Delete"
                                    style={{ margin:1 }}
                                >
                                    <RiDeleteBack2Fill/>
                                   
                                </Button></div>
                                </td>
                            </tr>
                            <tr>
                                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                Chicken Alfredo
                                </th>
                                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    
                                </td>
                                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    36 $
                                </td>
                                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                <div className='inline-flex'><Button
                                    color="transparent"
                                    buttonType="link"
                                    size="lg"
                                    title="Accept"
                                    style={{ margin:1 }}
                                >
                                    <MdOutlineDownloadDone/>
                                </Button>
                                <Button
                                    color="transparent"
                                    buttonType="link"
                                    size="lg"
                                    title="Delete"
                                    style={{ margin:1 }}
                                >
                                    <RiDeleteBack2Fill/>
                                   
                                </Button></div>
                                </td>
                            </tr>
                            <tr>
                                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                Chicken Alfredo
                                </th>
                                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    
                                </td>
                                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    36 $
                                </td>
                                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                <div className='inline-flex'><Button
                                    color="transparent"
                                    buttonType="link"
                                    size="lg"
                                    title="Accept"
                                    style={{ margin:1 }}
                                >
                                    <MdOutlineDownloadDone/>
                                </Button>
                                <Button
                                    color="transparent"
                                    buttonType="link"
                                    size="lg"
                                    title="Delete"
                                    style={{ margin:1 }}
                                >
                                    <RiDeleteBack2Fill/>
                                   
                                </Button></div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </CardBody>
        </Card>
    );
}
