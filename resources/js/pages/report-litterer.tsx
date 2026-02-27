import { Head } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import {
    Box,
    Button,
    Field,
    Icon,
    Input,
    useFileUploadContext,
    FileUpload,
} from '@chakra-ui/react';
import { Upload } from 'lucide-react';
import LocationPicker from '@/components/LocationPicker';
import { usePage, useForm } from '@inertiajs/react';
import { useState, useEffect } from 'react';
import { Alert, Stack, createListCollection, Select } from '@chakra-ui/react';

//for genders
const genders = createListCollection({
    items: [
        { label: 'Male', value: 'male' },
        { label: 'Female', value: 'female' },
    ],
});

const MAX_FILES = 3;

const ConditionalDropzone = () => {
    const fileUpload = useFileUploadContext();
    const acceptedFiles = fileUpload.acceptedFiles;

    if (acceptedFiles.length >= MAX_FILES) return null;

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
                <Box color="fg.muted">PNG, JPG, JPEG up to 5 MB</Box>
            </FileUpload.DropzoneContent>
        </FileUpload.Dropzone>
    );
};

export default function Litterer() {
    const { data, setData, reset, post, processing, errors } = useForm({
        name: '',
        estimatedAge: '',
        gender: '',
        distinguishingFeatures: '',
        latitude: null as number | null,
        longitude: null as number | null,
        images: [] as File[],
    });

    const [uploadKey, setUploadKey] = useState(0);
    //for submitting the form
    const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        post(route('litterer-reports.store'), {
            forceFormData: true,
            onSuccess: () => {
                reset();
                setUploadKey((prev) => prev + 1);
            },
        });
    };

    // for flash message
    const { props } = usePage();
    const { flash } = props as any;
    const [showAlert, setShowAlert] = useState(false);

    useEffect(() => {
        if (flash.success || flash.error) {
            setShowAlert(true);
            const timer = setTimeout(() => setShowAlert(false), 5000);
            return () => clearTimeout(timer);
        }
    }, [flash.success, flash.error]);

    return (
        <AppLayout>
            <Head title="Report Litterer" />
            <div className="relative flex h-full flex-col items-center justify-center gap-4 overflow-x-auto rounded-xl p-4">
                {/* show alert */}
                {showAlert && (
                    <div className="absolute top-4 right-4 z-50 w-full max-w-xs animate-in fade-in slide-in-from-top-2">
                        <Stack gap="4">
                            {/* Success Alert */}
                            {flash.success && (
                                <Alert.Root status="success" variant="solid">
                                    <Alert.Indicator />
                                    <Alert.Title>{flash.success}</Alert.Title>
                                </Alert.Root>
                            )}

                            {/* Error Alert */}
                            {flash.error && (
                                <Alert.Root status="error" variant="solid">
                                    <Alert.Indicator />
                                    <Alert.Title>{flash.error}</Alert.Title>
                                </Alert.Root>
                            )}
                        </Stack>
                    </div>
                )}

                <div className="flex flex-col items-center rounded-2xl border border-green-100 bg-linear-to-br p-6 text-center shadow-sm transition-all duration-300 hover:shadow-md sm:p-8 dark:border dark:border-gray-700">
                    <h1 className="mb-3 text-4xl leading-none font-extrabold tracking-tight sm:text-4xl lg:text-4xl xl:text-5xl">
                        <span className="bg-linear-to-r from-green-600 via-emerald-500 to-yellow-500 bg-clip-text text-transparent">
                            Report Litterer
                        </span>
                    </h1>

                    <p className="mx-auto max-w-2xl text-sm leading-relaxed font-normal text-gray-600 sm:text-base md:text-lg dark:text-gray-300">
                        Your report helps authorities identify individuals
                        involved in littering and take appropriate action to
                        protect the cleanliness of the community.
                    </p>
                </div>

                <div className="mx-auto flex h-full w-full flex-col gap-2 rounded p-10 shadow-2xl shadow-gray-500 md:max-w-2xl dark:border dark:border-gray-700 dark:shadow-md">
                    {/* Image upload */}
                    <div>
                        <h1 className="font-bold">Upload Litterer Image</h1>
                    </div>
                    <form
                        onSubmit={handleSubmit}
                        className="flex flex-col gap-5"
                    >
                        <div className="flex w-full flex-col rounded-lg">
                            <FileUpload.Root
                                key={uploadKey}
                                className="w-full"
                                alignItems="stretch"
                                focusRingColor={'green.500'}
                                maxFiles={MAX_FILES}
                                w="full"
                                onFileChange={(details) =>
                                    setData('images', details.acceptedFiles)
                                }
                            >
                                <FileUpload.HiddenInput />
                                <ConditionalDropzone />
                                <FileUpload.List clearable />
                            </FileUpload.Root>

                            {errors.images && (
                                <p className="mt-2 text-xs font-extrabold text-red-500">
                                    {errors.images}
                                </p>
                            )}
                        </div>

                        {/* image description */}
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                            <Field.Root invalid={!!errors.name}>
                                <Field.Label>
                                    Name of the suspect (optional)
                                </Field.Label>
                                <Input
                                    placeholder="e.g., Juan Dela Cruz"
                                    focusRingColor={'green.500'}
                                    css={{ '--error-color': 'green' }}
                                    value={data.name}
                                    onChange={(e) =>
                                        setData('name', e.target.value)
                                    }
                                />
                                {errors.name && (
                                    <p className="mt-2 text-xs font-extrabold text-red-500">
                                        {errors.name}
                                    </p>
                                )}
                            </Field.Root>

                            <Field.Root invalid={!!errors.estimatedAge}>
                                <Field.Label>Estimated age</Field.Label>
                                <Input
                                    placeholder="e.g., 20"
                                    focusRingColor={'green.500'}
                                    css={{ '--error-color': 'green' }}
                                    value={data.estimatedAge}
                                    onChange={(e) =>
                                        setData('estimatedAge', e.target.value)
                                    }
                                />
                                {errors.estimatedAge && (
                                    <p className="mt-2 text-xs font-extrabold text-red-500">
                                        {errors.estimatedAge}
                                    </p>
                                )}
                            </Field.Root>

                            <Field.Root invalid={!!errors.gender}>
                                <Field.Label>Gender</Field.Label>
                                <Select.Root
                                    collection={genders}
                                    value={[data.gender]}
                                    onValueChange={(details) =>
                                        setData('gender', details.value[0])
                                    }
                                    focusRingColor={'green.500'}
                                >
                                    <Select.Trigger>
                                        <Select.ValueText placeholder="Select Gender" />
                                    </Select.Trigger>

                                    <Select.Positioner zIndex="2000">
                                        <Select.Content>
                                            {genders.items.map((item) => (
                                                <Select.Item
                                                    item={item}
                                                    key={item.value}
                                                    _hover={{ bg: 'green.50' }}
                                                >
                                                    {item.label}
                                                </Select.Item>
                                            ))}
                                        </Select.Content>
                                    </Select.Positioner>
                                </Select.Root>

                                {errors.gender && (
                                    <p className="mt-2 text-xs font-extrabold text-red-500">
                                        {errors.gender}
                                    </p>
                                )}
                            </Field.Root>

                            <Field.Root
                                invalid={!!errors.distinguishingFeatures}
                            >
                                <Field.Label>
                                    Distinguishing features
                                </Field.Label>
                                <Input
                                    placeholder="e.g., Tattoo, Chubby, Tall"
                                    focusRingColor={'green.500'}
                                    css={{ '--error-color': 'green' }}
                                    value={data.distinguishingFeatures}
                                    onChange={(e) =>
                                        setData(
                                            'distinguishingFeatures',
                                            e.target.value,
                                        )
                                    }
                                />
                                {errors.distinguishingFeatures && (
                                    <p className="mt-2 text-xs font-extrabold text-red-500">
                                        {errors.distinguishingFeatures}
                                    </p>
                                )}
                            </Field.Root>
                        </div>

                        {/* map */}
                        <div className="flex flex-col gap-2">
                            <Field.Root invalid>
                                <Field.Label>Mark Location</Field.Label>
                                <div className="h-80 w-full overflow-hidden rounded-xl border-2 border-gray-200 shadow-inner">
                                    <LocationPicker
                                        value={{
                                            lat: data.latitude,
                                            lng: data.longitude,
                                        }}
                                        onLocationSelect={(lat, lng) => {
                                            setData((prev) => ({
                                                ...prev,
                                                latitude: lat,
                                                longitude: lng,
                                            }));
                                        }}
                                    />
                                </div>
                                <Field.HelperText>
                                    Click or drag the marker to the exact
                                    location.
                                </Field.HelperText>
                            </Field.Root>
                            {errors.latitude && (
                                <p className="mt-2 text-sm font-medium text-red-500">
                                    {errors.latitude}
                                </p>
                            )}
                        </div>

                        {/* sumbmit button */}
                        <div>
                            <Button
                                className="w-full"
                                colorPalette={'green'}
                                type="submit"
                                loading={processing}
                                size="lg"
                            >
                                Submit Report
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </AppLayout>
    );
}
