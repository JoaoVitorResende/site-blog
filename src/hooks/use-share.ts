import { useCallback, useMemo } from "react"
import { ShareConfig, SOCIAL_PROVIDERS, SocialProviders } from "./social-providers"
import { useClipboard } from "./useClipboard"
type UseShareProps = ShareConfig & {
    clipboardTimeout?: number
}

export const useShare = ({url, title, text, clipboardTimeout = 2000}: UseShareProps) =>{

    const {isCopied, handleCopy} = useClipboard({timeout: clipboardTimeout})

    const shareConfig = useMemo(() => ({
        url,
        ...(title && {title}),
        ...(text && {text}),
    }),[text, title, url])

    const share = useCallback(async (provider: SocialProviders) => {
        try{
            if(provider == 'clipBoard')
            {
                return await handleCopy(url)
            }
            const providerConfig = SOCIAL_PROVIDERS[provider]
            if(!providerConfig){
                throw new Error (`Provider nao suportado: ${provider}`)
            }
            const shareUrl = providerConfig.shareUrl(shareConfig);
            const shareWindow = window.open(shareUrl, '_blank','width=600,height=600,location=yes,status=yes')
            return !!shareWindow
        }catch (error){
            console.log(error)
            return false
        }
    
    }, [shareConfig, handleCopy, url])

    const shareButtons = useMemo(() => [
        ...Object.entries(SOCIAL_PROVIDERS).map(([key, provider]) => ({
            provider: key,
            name: provider.name,
            icon: provider.icon,
            action: () => share(key as SocialProviders)
        })),
        {
            provider: 'clipBoard',
            name: isCopied ? 'Link Copiado' : 'Copiar link',
            action: () => share("clipBoard")
        }
    ], [isCopied,share])
    return {
        shareButtons
    }
}