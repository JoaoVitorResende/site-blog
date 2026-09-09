type AvatarTitleProps = {
    children: React.ReactNode;
}

export const AvatarTitle = ({children}: AvatarTitleProps) =>{
    return(
        <strong>
            {children}
        </strong>
    )
}