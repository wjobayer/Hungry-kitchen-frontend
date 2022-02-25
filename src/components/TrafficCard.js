import Card from '@material-tailwind/react/Card';
import CardHeader from '@material-tailwind/react/CardHeader';
import CardBody from '@material-tailwind/react/CardBody';
import Button from '@material-tailwind/react/Button';
import Progress from '@material-tailwind/react/Progress';
import {IoCheckmarkDoneSharp} from 'react-icons/io5'
import {GiCampCookingPot} from 'react-icons/gi'
export default function TrafficCard() {
    return (
        <Card>
            <CardHeader className="bg-purple-500" contentPosition="none">
                <div className="w-full flex items-center justify-between">
                   
                    <div className='inline-flex'>
                    <h2 className="text-white text-2xl">Cooking</h2>
                    <h2 className="text-white text-2xl ml-8"><GiCampCookingPot/></h2>
                    </div>
                    {/* <Button
                        color="transparent"
                        buttonType="link"
                        size="lg"
                        style={{ padding: 0 }}
                    >
                        See More
                    </Button> */}
                </div>
            </CardHeader>
            <CardBody>
                <div className="overflow-x-auto">
                    <table className="items-center w-full bg-transparent border-collapse">
                        <thead className="thead-light">
                            <tr>
                                <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                                    Cooking
                                </th>
                                <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                                    Send To
                                </th>
                                <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left w-56">
                                    Status
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                Chicken Alfredo
                                </th>
                                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    Banani
                                </td>
                                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                <Button
                                    color="transparent"
                                    buttonType="link"
                                    size="lg"
                                    title="Done"
                                    style={{ margin:1 }}
                                >
                                   <IoCheckmarkDoneSharp/>
                                   
                                </Button>
                                </td>
                            </tr>
                            
                            <tr>
                                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                Chicken Alfredo
                                </th>
                                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    Banani
                                </td>
                                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                <Button
                                    color="transparent"
                                    buttonType="link"
                                    size="lg"
                                    title="Done"
                                    style={{ margin:1 }}
                                >
                                   <IoCheckmarkDoneSharp/>
                                   
                                </Button>
                                </td>
                            </tr>
                            
                            <tr>
                                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                Chicken Alfredo
                                </th>
                                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    Banani
                                </td>
                                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                <Button
                                    color="transparent"
                                    buttonType="link"
                                    size="lg"
                                    title="Done"
                                    style={{ margin:1 }}
                                >
                                   <IoCheckmarkDoneSharp/>
                                   
                                </Button>
                                </td>
                            </tr>
                            
                            <tr>
                                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                Chicken Alfredo
                                </th>
                                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    Banani
                                </td>
                                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                <Button
                                    color="transparent"
                                    buttonType="link"
                                    size="lg"
                                    title="Done"
                                    style={{ margin:1 }}
                                >
                                   <IoCheckmarkDoneSharp/>
                                   
                                </Button>
                                </td>
                            </tr>
                            
                        </tbody>
                    </table>
                </div>
            </CardBody>
        </Card>
    );
}
