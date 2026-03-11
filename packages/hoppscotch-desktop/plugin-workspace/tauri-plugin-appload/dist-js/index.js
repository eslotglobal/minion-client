import { invoke } from '@tauri-apps/api/core';
export async function download(options) {
    return await invoke('plugin:appload|download', { options });
}
export async function load(options) {
    return await invoke('plugin:appload|load', { options });
}
export async function close(options) {
    return await invoke('plugin:appload|close', { options });
}
export async function remove(options) {
    return await invoke('plugin:appload|remove', { options });
}
export async function clear() {
    return await invoke('plugin:appload|clear');
}
