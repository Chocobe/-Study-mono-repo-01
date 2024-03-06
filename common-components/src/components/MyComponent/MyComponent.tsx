// react
import {
    memo,
} from 'react';

type TMyComponentProps = {
    title: string;
    description: string;
    numValue?: number;
    boolValue?: boolean;
}

function _MyComponent(props: TMyComponentProps) {
    const {
        title,
        description,
        numValue,
        boolValue,
    } = props;

    return (
        <div>
            <h1>
                Title: {title}
            </h1>

            <p>
                Description: {description}
            </p>

            <p>
                numValue: {String(numValue)}
            </p>

            <p>
                boolValue: {String(boolValue)}
            </p>
        </div>
    );
}

const MyComponent = memo(_MyComponent) as typeof _MyComponent;
export default MyComponent;
