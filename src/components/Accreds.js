import Image from 'next/image';

export default () => (
    <div className="accreds">
        <Image
            src="/assets/images/chartered_psychologist_logo.png"
            width={300}
            height={300}
            alt="accred1"
        />
        <Image
            src="/assets/images/hpc-reg-logo.png"
            width={300}
            height={300}
            alt="accred2"
        />
    </div>
);
