type Props = {
    placeholder: string;
    type?: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({ placeholder, type = "text", onChange }: Props) {
    return (
        <input
            type={type}
            placeholder={placeholder}
            onChange={onChange}
            style={{
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "6px",
                width: "100%",
            }}
        />
    )

}
