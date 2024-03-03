import Image from "next/image";

interface EmptyProps {
    label: string;
}

const Empty = ({label}:EmptyProps) => {
    return (
        <div>
            {/* <div>
                <Image alt="Empty" fill src="/empty.png" />
            </div> */}
            <p className="text-muted-foreground font-light text-sm md:text-lg text-center">
                {label}
            </p>
        </div>
    )
}

export default Empty;