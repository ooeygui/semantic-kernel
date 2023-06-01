/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

export interface ILogger {
    trace(msg: string): void;
    debug(msg: string): void;
    warn(msg: string): void;
    error(msg: string): void;
}

export class NullLogger implements ILogger {
    trace(_: string): void {
        // No action
    }

    debug(_: string): void {
        // No action
    }

    warn(_: string): void {
        // No action
        console;
    }

    error(_: string): void {
        // No action
    }
}
