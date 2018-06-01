export interface TypedAction<T> {
    type: string
    payload: T
}