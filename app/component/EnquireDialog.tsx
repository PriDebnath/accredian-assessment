"use client";

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import LeadCaptureForm from "./LeadCaptureForm";

interface Props {
    size: 'lg';
    buttonClass: string;
}

export default function EnquireDialog(props: Props) {
    let { size, buttonClass } = props
    return (
        <Dialog>
            <DialogTrigger render={
                <Button size={size} className={buttonClass}>
                    Enquire Now
                </Button>
            }>

            </DialogTrigger>

            <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-4xl">
                <DialogHeader>
                    <DialogTitle className="text-2xl">
                        Enquire Now
                    </DialogTitle>

                    <DialogDescription>
                        Tell us about your training requirements and our team
                        will get in touch with you.
                    </DialogDescription>
                </DialogHeader>

                <LeadCaptureForm />
            </DialogContent>
        </Dialog>
    );
}