import { Head } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import type { BreadcrumbItem } from '@/types';
import { dashboard } from '@/routes';
import { Field, Input, Button } from '@chakra-ui/react';
import { Box, FileUpload, Icon, useFileUploadContext } from '@chakra-ui/react';
import { Upload } from 'lucide-react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: dashboard().url,
    },
];

const MAX_FILES = 3;

const ConditionalDropzone = () => {
    const fileUpload = useFileUploadContext();
    const acceptedFiles = fileUpload.acceptedFiles;

    if (acceptedFiles.length >= MAX_FILES) {
        return null;
    }

    return (
        <FileUpload.Dropzone className="w-full flex-1 cursor-pointer border-green-400">
            <Icon size="md" color="fg.muted">
                <Upload />
            </Icon>
            <FileUpload.DropzoneContent>
                <Box className="text-md font-bold text-green-600">
                    Attach your files here
                </Box>
                <Box color="fg.muted">Maximum of 3 Files</Box>
            </FileUpload.DropzoneContent>
        </FileUpload.Dropzone>
    );
};

export default function Waste() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Report Waste" />
            <div className="flex h-full flex-1 items-center justify-center gap-4 overflow-x-auto rounded-xl p-4">
                <div className="flex h-full w-2xl flex-col gap-2 rounded p-5 shadow-2xl shadow-gray-500">
                    {/* Image upload */}
                    <div>
                        <h1 className="font-bold">Upload Waste Image</h1>
                    </div>
                    <form
                        action=""
                        method="post"
                        className="flex flex-col gap-5"
                    >
                        <div className="flex w-full rounded-lg">
                            <FileUpload.Root
                                className="w-full"
                                alignItems="stretch"
                                maxFiles={MAX_FILES}
                                w="full"
                            >
                                <FileUpload.HiddenInput />
                                <ConditionalDropzone />
                                <FileUpload.List clearable />
                            </FileUpload.Root>
                        </div>

                        {/* image description */}
                        <div className="flex gap-2">
                            <Field.Root invalid>
                                <Field.Label>Waste Type</Field.Label>
                                <Input
                                    placeholder="e.g., Plastic bottles, metal scraps, or paper"
                                    focusRingColor={'green.500'}
                                    css={{ '--error-color': 'green' }}
                                />
                                {/* <Field.ErrorText>
                                    This field is required
                                </Field.ErrorText> */}
                            </Field.Root>

                            <Field.Root invalid>
                                <Field.Label>Estimated Weight</Field.Label>
                                <Input
                                    placeholder="e.g., 1 kg or 5 kg"
                                    focusRingColor={'green.500'}
                                    css={{ '--error-color': 'green' }}
                                />
                                {/* <Field.ErrorText>
                                    This field is required
                                </Field.ErrorText> */}
                            </Field.Root>
                        </div>

                        {/* map */}
                        <div className="flex flex-col gap-2">
                            <Field.Root invalid>
                                <Field.Label>Estimated Weight</Field.Label>
                            </Field.Root>
                            <div>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13960.041065796417!2d124.02191818900059!3d11.269676666658945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a87638029cc2b1%3A0x3c01abb2b827a22a!2sTapilon%2C%20Daanbantayan%2C%20Cebu!5e1!3m2!1sen!2sph!4v1772120147499!5m2!1sen!2sph"
                                    className="h-100 w-full"
                                    loading="lazy"
                                ></iframe>
                            </div>
                        </div>

                        {/* sumbmit button */}
                        <div>
                            <Button className="w-full" colorPalette={'green'}>
                                Submit Report
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </AppLayout>
    );
}
